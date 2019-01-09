<template>
    <div class=" page-404-full-page">
        <div class="row">
            <div class="col-md-12 page-404">
                <div class="number font-red"> 404 </div>
                <div class="details">
                    <h3>Oops! You're lost.</h3>
                    <p> We can not find the page you're looking for.
                        <br>
                        <router-link to="/">Return Home</router-link>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
}
</script>
<style scoped>
.page-404-full-page{
    height: 100vh;
    margin-bottom: 0px!important;
}
</style>
