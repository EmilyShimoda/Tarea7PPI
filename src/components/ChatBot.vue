<script setup>
import NavBar from '@/components/NavBar.vue';
</script>

<template>
    <NavBar/>
    <div class="px-10 py-10 h-[90vh] bg-[url('../components/imgs/7087596.jpg')] bg-center bg-cover flex justify-center items-center">
        <div class="bg-white w-[80vw] rounded-4xl p-10">
            <div class="h-[60vh] border-zinc-700 text-zinc-500">
                <div v-for="(message, index) in messages" :key="index" class="message">
                <p :class="message.sender">{{ message.text }}</p>
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
  
  export default {
    data() {
      return {
        userInput: '',
        messages: [],
      };
    },
    methods: {
      async sendMessage() {
        if (!this.userInput.trim()) return;
  
        // Add user message to the chat
        this.messages.push({ text: this.userInput, sender: 'user' });
  
        // Call the AI API
        const response = await this.getAIResponse(this.userInput);
  
        // Add AI response to the chat
        this.messages.push({ text: response, sender: 'ai' });
  
        // Clear input field
        this.userInput = '';
      },
      async getAIResponse(input) {
        try {
            const response = await axios.post(
            'https://api.openai.com/v1/chat/completions',
            {
                model: 'gpt-3.5-turbo',
                messages: [
                { role: 'system', content: 'You are a helpful assistant.' },
                { role: 'user', content: input }
                ]
            },
            {
                headers: {
                'Authorization': `Bearer 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`,
                'Content-Type': 'application/json'
                }
            }
        );

        // Log the API response for debugging
        console.log('API Response:', response.data);

        // Return the AI response
        return response.data.choices[0].message.content;
        } catch (error) {
            console.error('Error with AI response:', error.response ? error.response.data : error.message);
            return 'Sorry, I couldn’t understand that. Please try again.';
        }
    }

    }
  };
  </script>
  
  <style scoped>
  /* .chatbot {
    width: 400px;
    margin: 0 auto;
    border: 1px solid #ccc;
    padding: 20px;
    border-radius: 8px;
  }
  
  .chat-window {
    max-height: 300px;
    overflow-y: auto;
    margin-bottom: 20px;
  } */
  
  .message {
    margin-bottom: 10px;
  }
  
  .message.user {
    text-align: right;
    color: blue;
  }
  
  .message.ai {
    text-align: left;
    color: green;
  }
  
  .input-section {
    display: flex;
    justify-content: space-between;
  }
  
  /* input {
    width: 80%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  button {
    width: 15%;
    padding: 8px;
    border: none;
    background-color: #4CAF50;
    color: white;
    border-radius: 4px;
  } */
  </style>
  