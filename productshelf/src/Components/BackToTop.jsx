import { Link } from "react-router-dom";
import {Box} from '@chakra-ui/react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowUp } from "@fortawesome/free-solid-svg-icons";

export default function BackToTop(){
return <Link to='/#'>
        <Box position='fixed'
            bottom='20px'
            right={['16px', '84px', '84px', '84px', '120px']}
            zIndex={2}
        >
            <FontAwesomeIcon icon={faCircleArrowUp} size='2xl'/>
        </Box>
    </Link>


    }