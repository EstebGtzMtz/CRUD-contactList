
import { Avatar, Divider } from "@mui/material";
import { stringAvatar } from "../../helpers/functions";
import { IContactsResults } from "../../interfaces/responses";
import ActionsButtons from "../ActionsButtons";
import { StyledBadge } from "./ContactCard.styled";


const ContactCard = ({firstName, lastName='S', phone, id}:IContactsResults) => {

  return (
    <div className="contact-card-row">
      <div className="contact-card-row-photo-info">
        <div className="menu-icon">
          <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            variant="dot"
          >
            <Avatar {...stringAvatar(`${firstName} ${lastName}`)} />
          </StyledBadge>
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