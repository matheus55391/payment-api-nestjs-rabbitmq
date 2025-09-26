export const MICROSERVICES = {
    PAYMENT_SERVICE: {
        name: 'PAYMENT_SERVICE',
        queue: 'payment_queue'
    },
    ORDER_SERVICE: {
        name: 'ORDER_SERVICE',
        queue: 'order_queue'
    },
    NOTIFICATION_SERVICE: {
        name: 'NOTIFICATION_SERVICE',
        queue: 'notification_queue'
    }
} as const;
