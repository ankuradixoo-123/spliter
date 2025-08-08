const express = require('express');
const InviteController = require('../Controllers/inviteController');

const router = express.Router();

router.post('/send-invite', InviteController.InviteController);

module.exports = router;