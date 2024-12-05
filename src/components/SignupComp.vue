<template >
    <div>
        <h2>This is the sign up comp</h2>
        <form action="">
            <label for="fullName" >Fullname: </label>
            <input type="text" placeholder="Enter your fullname..." id="fullName" v-model="fullName"><br>
            <label for="username" >Username: </label>
            <input type="text" placeholder="Enter your username" id="username" v-model="username"><br>
            <label for="email">Email: </label>
            <input type="email" placeholder="Enter your email..." id="email" v-model="email"><br>
            <label for="pwd">Password: </label>
            <input type="password" placeholder="Enter your password..." id="pwd" v-model="password"><br>


        </form><br>
        <button>Sign Up</button>
    </div>
</template>
<script>
export default {

    data(){
        return {
            fullName: "",
            username: "",
            email: "",
            password: ""
        }
    }
    
}
</script>
<style >
    
</style>