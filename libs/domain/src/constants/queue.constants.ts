export const QUEUE_PATTERNS = {
    // Order patterns
    ORDER_CREATED: 'order.created',
    ORDER_CONFIRMED: 'order.confirmed',
    ORDER_CANCELLED: 'order.cancelled',
    ORDER_STATUS_UPDATED: 'order.status.updated',

    // Payment patterns
    PAYMENT_CREATED: 'payment.created',
    PAYMENT_PROCESSED: 'payment.processed',
    PAYMENT_FAILED: 'payment.failed',
    PAYMENT_REFUNDED: 'payment.refunded',

    // Notification patterns
    NOTIFICATION_SEND: 'notification.send',
    EMAIL_SEND: 'email.send',
    SMS_SEND: 'sms.send'
} as const;
