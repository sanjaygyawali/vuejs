<template>
<div class="row">
  <form @submit.prevent="onSubmit('user')" action="" >
    <div class="col-md-12">

      <div class="row">
      <div class="col-md-6">
        <text-input 
                    v-model="FirstName"
                    @change="alertChange"
                    label="FirstName" 
                    name="FirstName"
                    validation="alpha"
                    holder="Enter First Name">
        </text-input>
        <text-input 
                    v-model="MiddleName"
                    @change="alertChange"
                    label="MiddleName" 
                    name="MiddleName"
                    validation="alpha"
                    holder="Enter Middle Name">
        </text-input>
        <text-input 
                    v-model="LastName"
                    @change="alertChange"
                    label="Lastname" 
                    name="LastName"
                    validation="alpha|required"
                    holder="Enter Last Name">
        </text-input>
        <text-input 
                    v-model="Email"
                    @change="alertChange"
                    label="Email" 
                    name="Email"
                    validation="required|email"
                    holder="Enter Your Email">
        </text-input>
        <div class="form-group">
          <label class="control-label">BirthDate :</label>
          <flat-pickr class="form-control"
                    label= 'This is label'
                    v-model="BirthDate"
                    name="BirthDate"
                    v-validate="'required|date_format:YYYY-MM-DD'"
                    > </flat-pickr>
              <small  class="text-danger form-text text-muted" 
                v-text="errors.first('BirthDate')"></small>
        </div>
        <div class="form-group">
          <label for="Nationality" class="control-label">Nationality:</label>
          <v-select v-model="Nationality" 
                    label="Nationality"
                    placeholder="Input Data"
                    :options="NationList" 
                    v-validate:Nationality="'required'"
                    name="Nationality" >
          </v-select>
          <small class="text-danger form-text text-muted" 
                  v-text="errors.first('Nationality')">
          </small>
        </div>
        <div class="form-group">
          <label for="Gender" class="control-label">Gender</label>
          <div class="mt-checkbox-inline">
          <radio name="Gender" value="1" v-validate="'required'" v-model="Gender">
          Male
          </radio>
          <radio name="Gender" value="0"  v-model="Gender">
            Female
          </radio>
          </div>
          <small class="text-danger form-text text-muted" 
                  v-text="errors.first('Gender')"></small>
        </div>
        <text-input 
                    v-model="Contact"
                    @change="alertChange"
                    label="Contact" 
                    name="Contact"
                    validation="required"
                    holder="Enter Your Contact">
        </text-input>
        <text-input 
                    v-model="PermanentAddress"
                    @change="alertChange"
                    label="PermanentAddress" 
                    name="PermanentAddress"
                    validation="required"
                    holder="Enter Your PermanentAddress">
        </text-input>
        <text-input 
                    v-model="Role"
                    @change="alertChange"
                    label="Role" 
                    name="Role"
                    validation="required"
                    holder="Enter Your Role">
        </text-input>
        <text-input 
                    v-model="UserName"
                    @change="alertChange"
                    label="Username" 
                    name="UserName"
                    validation="required"
                    holder="Enter Desired UserName">
        </text-input>

        <div class="form-group">
          <label for="Nationality" class="control-label">Password:</label>
          <input type="password" ref="password" class="form-control" id="pasw">
        </div>

        <div class="form-group">
          <label for="Nationality" class="control-label">Password:</label>
          <input type="password" v-validate="'confirmed:password|required'" name="Password" class="form-control" id="pswconfs">
          <small class="text-danger form-text text-muted" 
                  v-text="errors.first('Password')">
          </small>
        </div>
      </div>
      <div class="col-md-6">
        <div style="margin:2px auto;width:150px;height:180px;background:white" class="">
            <my-upload field="attachment"
              :previousProfile= previousProfile
              :profileLink= profileLink
              :noSquare= "true"
              placeholder="Choose a image"
              langType="en"
              @crop-success="cropSuccess"
              @crop-upload-success="cropUploadSuccess"
              @crop-upload-fail="cropUploadFail"
              @changeFileName="changeFileName"
              v-model="show"
              :width="300"
              :height="300"
              url="127.0.0.1/api/v1/attachment"
              :params="params"
              :headers="headers"
              img-format="png">
          </my-upload>
        </div>
      </div>
      </div>
      <div class="row">
        <div class="col-md-12">
      <div class="form-actions">
        <div class="btn-group pull-right">
        <button class="btn green" type="submit">Submit</button>
        <a class="btn default" href="#">Cancel</a>
        </div>
      </div>
      </div>
      </div>

    </div>

  </form>
</div>
</template>
<script>
import TextInput from '@/app/Vue/components/form/TextInput.vue'
import DatePicker from '@/app/Vue/components/form/DatePicker.vue'
import Radio from '@/app/Vue/components/form/Radio.vue'
import axios from 'axios'
import myUpload from '@/app/Vue/components/form/UserProfileUpload.vue'
// import { mapState } from 'vuex'

export default {
  components: {
    'text-input': TextInput,
    'date-picker': DatePicker,
    'radio': Radio,
    'my-upload': myUpload
  },
  data () {
    return {
      profileExist: false,
      previousProfile: true,
      profileLink: '/static/logo.png',
      defaultImage: './static/logo.png',
      show: false,
      params: {
        token: '1234141341',
        name: 'avatar'
      },
      headers: {
        smail: '*_~'
      },
      imgDataUrl: '',
      Email: '',
      FirstName: 'Normal texxt',
      MiddleName: '',
      LastName: '',
      BirthDate: '',
      Nationality: '',
      NationList: [],
      Gender: '',
      Contact: '',
      PermanentAddress: '',
      Role: '',
      UserName: '',
      Password: '',
      src: 'http://www.qygjxz.com/data/out/105/5808392-hd-wallpaper-1080p.jpg'
    }
  },
  created () {
    this.setPageDetails()
  },
  mounted () {
    this.fetchNationality()
  },
  methods: {
    onSubmit (scope) {
      window.console.log('Form Is submitted on socpe:', scope)
      this.$validator.validateAll().then(result => {
        if (!result) {
          window.console.log('Is not Valid')
        } else {
          window.console.log('Is Valid')
        }
      })
    },
    changeFileName (fileLink) {
      window.console.log('this is file link', fileLink)
      this.profileLink = fileLink
    },
    toggleShow () {
      this.show = !this.show
    },
    cropSuccess (imgDataUrl, field) {
      window.console.log('crop success')
      this.imgDataUrl = imgDataUrl
    },
    cropUploadSuccess (jsonData, field) {
      window.console.log('-------- upload success --------')
      window.console.log(jsonData)
      window.console.log('field: ' + field)
    },
    cropUploadFail (status, field) {
      window.console.log('-------- upload fail --------')
      window.console.log(status)
      window.console.log('field: ' + field)
    },
    setPageDetails () {
      // eslint-disable-next-line
      //TODO this dispatch should be on own page inside BeforeCreated method
      this.$store.dispatch('changeToList', { link: '/post/list', pageTitle: 'Users' })
    },
    alertChange () {
      window.console.log('test text')
      // window.alert('this is change message')
    },
    fetchNationality () {
      axios.get('api/v1/nationality').then(response => {
        window.console.log(response.data)
        this.NationList = response.data
      })
    }
  }
}
</script>
<style>
.v-select .dropdown-toggle .clear{
  bottom: 5px;
}

</style>
