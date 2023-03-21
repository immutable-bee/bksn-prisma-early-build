import { Modal } from "@nextui-org/react";

// Modal State & Handlers
//   const [visible, setVisible] = React.useState(false);
//   const handler = () => setVisible(true);
//   const closeHandler = () => { setVisible(false); };

export const ModalBase = (props) => {
  return (
    <div className="Modal-Base-Container">
      <Modal
        className="modal-base-container"
        open={props.viewstate}
        onClose={props.closehandler}
        width="40vw"
      >
        {props.header}
        {props.body}
        {props.footer}
      </Modal>
    </div>
  );
};
