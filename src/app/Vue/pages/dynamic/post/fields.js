export default [
  {
    name: '__checkbox',
    titleClass: 'center aligneds',
    dataClass: 'center aligned'
  },
  {
    name: '__sequence',
    title: '#',
    titleClass: 'center aligned',
    dataClass: 'right aligned'
  },
  {
    title: 'Name',
    name: 'name',
    sortField: 'name'
  },
  {
    title: 'Email',
    name: 'email',
    sortField: 'email'
  },
  {
    title: 'Gender',
    name: 'gender',
    callback: this.genderLabel,
    visible: false
  },
  {
    title: 'BirthDate',
    name: 'birthdate',
    callback: this.formatDate
  },
  {
    name: 'salary',
    title: 'Salary',
    titleClass: 'center aligned',
    dataClass: 'center aligned',
    callback: this.formatNumber
  },
  {
    name: 'nickname',
    title: 'NickName',
    callback: this.allCap
  },
  {
    name: 'address.line2',
    title: 'Addreess',
    titleClass: 'center aligned',
    dataClass: 'center aligned'
  },
  {
    name: '__component:custom-action',
    title: 'Actions',
    titleClass: 'center aligned',
    dataClass: 'center aligned'
  }
]
