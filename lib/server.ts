import 'reflect-metadata';
import { useExpressServer } from 'routing-controllers';
import expressApp from './startup';

const port = 3000;

useExpressServer(expressApp, {
  routePrefix: '/api',
  cors: {
    // options from cors documentation
  },
  controllers: [
    __dirname + '/Controllers/*.ts]'
  ],
  middlewares: [

  ]
});

expressApp.listen(port, function() {
  console.log('Express server listening on port ' + port);
});