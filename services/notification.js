import * as Notifications from "expo-notifications";
import * as Permissions from "expo-permissions";

function createNotification() {
  return {
    title: "Flash Cards today alert",
    body: "👋 don't forget to take today quiz!",
  };
}

export const setNotification = () => {
  Permissions.askAsync(Permissions.NOTIFICATIONS).then(async ({ status }) => {
    if (status === "granted") {
      Notifications.cancelAllScheduledNotificationsAsync();

      Notifications.setNotificationHandler({
        handleNotification: async () => ({
          shouldShowAlert: true,
          shouldPlaySound: false,
          shouldSetBadge: false,
        }),
      });

      let tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      tomorrow.setSeconds(tomorrow.getSeconds());

      Notifications.scheduleNotificationAsync({
        content: createNotification(),
        trigger: {
          date: tomorrow,
          repeats: true,
        },
      });
    }
  });
};
