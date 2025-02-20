export { };

declare global {
    interface Window {
        Telegram: {
            WebApp: {
                initData: string;
                initDataUnsafe: {
                    user?: {
                        id: number;
                        first_name: string;
                        last_name?: string;
                        username?: string;
                    };
                };
                expand: () => void;
                close: () => void;
                enableClosingConfirmation: () => void;
                themeParams?: Record<string, string>;
            };
        };
    }
}