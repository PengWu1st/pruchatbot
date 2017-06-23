import conversationRouter from './api/controllers/conversation/router';

const root = '/pruchatbot/api/v1';
export default function routes(app) {
  app.use(`${root}/watson/conversation`, conversationRouter);
};