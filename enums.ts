const enums = {
  AUTH: {
    QR: "qr",
    FAILED: "auth_failure",
    SUCCEED: "authenticated",
    DISCONNECTED: "disconnected",
    READY: "ready",
    REMOTE_SESSION_SAVED: "remote_session_saved",
    LOADING_SCREEN: "loading_screen",
  },

  CHANGE_BATTERY: "change_battery",
  CHANGE_STATE: "change_state",

  GROUPS: {
    WHO_JOINED: "group_join",
    WHO_LEAVED: "group_leave",
    UPDATED: "group_update",
  },

  MESSAGES: {
    NEW_MESSAGE: "message",
    MESSAGE_CREATE: "message_create",
    MEDIA_UPLOADED: "media_uploaded",
    AFFECTED: "message_ack",
    REVOKED_EVERYONE: "message_revoke_everyone",
    REVOKED_ME: "message_revoke_me",
    REACTED: "message_reaction",
  },
};

export { enums };
