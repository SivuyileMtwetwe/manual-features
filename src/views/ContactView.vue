<template >
    <div>
        <h1>Contact View</h1>

        <form action="">
            <label>Email: 
                <input type="email" placeholder="Enter email here..." v-model="email">
            </label><br>

            <label> Message: 
                <textarea name="" id="" placeholder="Write a message here..." v-model="message"></textarea>
            </label><br>

            <button >Submit</button>
        </form>

        {{ email }}
        {{ message }}
    </div>
</template>
<script>
export default {
    data(){
        return {
            email: "",
            message: ""
        }
    }
}
</script>
<style >
    form{
        width: 500px;
        box-shadow: 3px dotted ;
    }
</style>