
import { Avatar, Divider } from "@mui/material";
import { stringAvatar } from "../../helpers/functions";
import { IContactsResults } from "../../interfaces/interfaces";
import ActionsButtons from "../ActionsButtons";

const ContactCard = ({firstName, lastName='S', phone, id}:IContactsResults) => {

  return (
    <div className="contact-card-row">
      <div className="contact-card-row-photo-info">
        <div className="menu-icon">
          <Avatar {...stringAvatar(`${firstName} ${lastName}`)} />
        </div>
        <div className="contact-card-row-info">
          <h3>{firstName}</h3>
          <h4>
            {phone}
          </h4>
        </div>
      </div>
      <div>
        <ActionsButtons id={id}/>
      </div>
    </div>
  )
}

export default ContactCard