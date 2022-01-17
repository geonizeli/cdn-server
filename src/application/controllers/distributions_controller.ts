import { Router } from "../../../modules/oak.ts"

const router = new Router();

router.get('/distributions', (context) => {
  context.response.body = {
    message: 'distributions endpoint'
  }
})


export const distributionsController = router;