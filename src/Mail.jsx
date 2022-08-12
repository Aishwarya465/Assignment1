import { data } from "./data"
import styled from "styled-components"
import FontDownloadIcon from '@mui/icons-material/FontDownload';
import { Button } from "@mui/material";
const container = styled.div`
`
const IconButton = styled.div`
float: left;
width:100px;
height:100px;
margin-left:50px;
padding-top: 10px;

`
const InfoContainer = styled.div`
margin-left:40px;
margin-bottom: 20px;
border: 1px solid gray;
width: 70%;
`
const Email = styled.div`
font-weight: bold;
`
const Name = styled.div``
const Date = styled.div``
const Subject = styled.div`
font-weight: bold;
`
const Desc = styled.div`
`
const  Mail = () => {
    return(
        <container>
            {
                data.map((item) => ( 

            <InfoContainer>
                <IconButton
                size="large"
                aria-label="add"
                sx={{display: "flex", justifyContent: "flex-end"}}>
                <FontDownloadIcon sx={{ fontSize: "40px" }} />
                </IconButton>
            
            <Email>from: {item.email}</Email>
            <Subject>subject: {item.subject}</Subject>
            <Name>{item.name}</Name>
            <Date>{item.date}</Date>
           
            <Desc>{item.short_description}</Desc>

             </InfoContainer>
            
            ))}

        </container>
    )
}

export default Mail