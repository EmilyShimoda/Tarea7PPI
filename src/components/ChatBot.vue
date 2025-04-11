<script setup>
import NavBar from '@/components/NavBar.vue';

</script>

<template>
    <NavBar/>
    <div class="px-10 py-10 h-[90vh] bg-[url('../components/imgs/7087596.jpg')] bg-center bg-cover flex justify-center items-center">
        <div class="bg-white w-[80vw] rounded-4xl p-10">
            <div class="h-[60vh] overflow-y-auto border-zinc-700 text-zinc-500 text-xl">
                <div v-for="(message, index) in messages" :key="index" class="message">
                <textarea :class="message.sender" class="message">{{ message.text }}</textarea>
                </div>
            </div>
            <div class=" flex flex-row items-center justify-center">
                <input class="quicksand w-[60vw] border-zinc-100 text-xl text-zinc-500 rounded-4xl outline-2 mx-5 px-6 py-3" v-model="userInput" @keyup.enter="sendMessage" placeholder="Type your message" />
                <button class="sour-gummy text-2xl bg-violet-500 text-purple-100 px-6 py-2 rounded-md hover:bg-violet-600 transition duration-300" @click="sendMessage">Send</button>
            </div>
        </div>
    </div>
</template>
  
  <script>
  import axios from 'axios';
//   require('dotenv').config();
  
  export default {
    data() {
      return {
        userInput: '',
        messages: [],
      };
    },
    methods: {
      async sendMessage() {
        console.log("API Key:", import.meta.env.VITE_API_KEY);
        if (!this.userInput.trim()) return;
  
        // Add user message to the chat
        this.messages.push({ text: this.userInput, sender: 'User' });
  
        // Call the AI API
        const response = await this.getAIResponse(this.userInput);
  
        // Add AI response to the chat
        this.messages.push({ text: response, sender: 'AI' });
  
        // Clear input field
        this.userInput = '';
      },
      async getAIResponse(input) {
        try {
          const response = await axios.post('/ai', {input: input})
          .then((response) => {
              console.log("ai");
              // console.log(response);
              return response.data;
          })
          .catch(e => {
            console.log(e);
          });
          return response;
        } catch (error) {
          console.log(error);
              // console.error('Error with AI response:', error.response ? error.response.data : error.message);
              return 'Sorry, I couldn’t understand that. Please try again.';
        }
    }

    }
  };
  </script>
  
  <style scoped>
  
  .message {
    margin-bottom: 10px;
  }
  
  .User {
    text-align: right;
    color: #66469a;
  }
  
  .AI {
    text-align: left;
    color: black;
  }
  
  .input-section {
    display: flex;
    justify-content: space-between;
  }
  
  </style>
  