import { Store } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";

const Toast = (Type, Title, Message) => {
  // this function for popup
  Store.addNotification({
    title: Title,
    message: Message,
    type: Type,
    insert: "top",
    container: "top-right",
    animationIn: ["animate__animated", "animate__fadeIn"],
    animationOut: ["animate__animated", "animate__fadeOut"],
    dismiss: {
      duration: 1000,
      onScreen: true,
    },
  });
};

export default Toast;
