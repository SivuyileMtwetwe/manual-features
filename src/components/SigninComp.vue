<template >
    <div>
        <h2>This is the sign in comp</h2>

        <form action="">
            <label for="usernsme">Username: </label>
            <input type="text" name="" id="username" placeholder="Enter your username" v-model="username"><br>
            <label for="pwd">Password: </label>
            <input type="password" name="" id="pwd" placeholder="Enter your password" v-model="password">
        </form>

        <button>Sign In</button>
        
    </div>
</template>
<script>
export default {
    data(){
        return {
            username: "",
            password: ""
        }
    }
    
}
</script>
<style >
    
</style>