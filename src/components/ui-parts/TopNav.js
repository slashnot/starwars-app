import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    FormInput, InputGroup,
    InputGroupAddon,
    InputGroupText,
} from "shards-react";

// TopNav UI Component
const TopNav = props => {
    return (
        <nav className="top-nav row">
            <h3 className="logo col-md-2 col-lg-2">Logo</h3>
            <InputGroup size="md" seamless className="col-md-8 c0l-lg-8">
                <InputGroupAddon type="prepend">
                    <InputGroupText>
                        <FontAwesomeIcon icon={faSearch} />
                    </InputGroupText>
                </InputGroupAddon>
                <FormInput className="border-0" placeholder="Search Planets" />
            </InputGroup>
            <div className="user-info col-md-2 col-lg-2">User Info</div>
        </nav>
    )
}

export { TopNav }
export default TopNav