import { token } from './auth';
import { TwitterOpenApiService } from './twitterModule';
import { MessageCommand } from './types';
import TelegramBot from 'node-telegram-bot-api';

// polling allows the bot to listen for and receive new messages
const bot = new TelegramBot(token, { polling: true });
const twitter = new TwitterOpenApiService();

bot.on('message', (msg: any) => {
  const chatId = msg.chat.id;
  const messageText = msg.text;
  console.log('incoming message:', msg);

  // Process the incoming message here
  if (messageText === MessageCommand.start) {
    bot.sendMessage(chatId, 'Welcome to the bot!');
  }
  if (messageText === MessageCommand.getLilDon) {
    twitter.getUserInfoByTag().then((response) => {
      bot.sendMessage(chatId, `Here is info on lildondiablo: ${response}`);
    });
  }
});
