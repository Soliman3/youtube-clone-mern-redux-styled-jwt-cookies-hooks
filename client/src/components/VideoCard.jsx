import React from 'react';
import { Link } from 'react-router-dom';

// import styled components library for styling our app...
import styled from 'styled-components';

// import videoVardImage from images folder...
import videoCardImage from '../images/videoCard.jpg'
// import ChannelImage from images folder...
import ChannelImage from '../images/AccountImage.jpg';


// Styling...
// Styled component for (div) for makeing Main Container of Video Card...
const Container = styled.div`
    max-width: 100%;
    cursor: pointer;
    gap: 12px;
    margin-bottom: ${(props)=> props.type === 'sm'? '10px': '45px'};
    display: ${(props) => props.type === 'sm' && 'flex'};
    

`
// Styled component for (img) for makeing Video Image...
const VideoImage = styled.img`
max-width: 100%;
    height:${(props)=> props.type === 'sm' ? '100px': '167px'};
    background: gray;
    object-fit: cover;
    flex:0.5;
    margin-bottom: ${(props)=> props.type === 'sm' && '10px'};
`
// Styled component for (div) for wrapping Video Details in it...
const VideoDetails = styled.div`
    display: flex;
    margin-top: ${(props)=> props.type === 'sm'? '3px': '10px'};
    gap: 12px;
    flex:1.5;
`
// Styled component for (img) for Channel Image...
const AccountImage = styled.img`
    width: 36px;
    height:36px;
    border-radius: 50%;
    background-color: gray;
    object-fit: cover;
    display: ${(props)=> props.type === 'sm' && 'none'};
`
// Styled component for (div) just for containing Video text of title & info...
const VideoText = styled.div``

// Styled component for (h1) for Video Name...
const VideoName = styled.h1`
    font-weight: 500;
    font-size: ${(props)=> props.type === 'sm'? '14px': '16px'};
    color: ${({ theme }) => theme.Alltext};
`
// Styled component for (h2) for Channel Name...
const AccountName = styled.h2`
    margin-top: 12px;
    margin-bottom: 4px;
    color: ${({ theme }) => theme.SoftText};
    font-size: 12px;
    font-weight: 500;
`
// Styled component for (div) for Video info...
const VideoInfo = styled.div`
    color: ${({ theme }) => theme.SoftText};
    font-size: ${(props)=> props.type === 'sm'? '13px': '12px'};
    font-weight: 400;
`
// React functional component for Video Cards...
export default function VideoCard({type}) {
    return (
        <Link to="/video/123" style={{color: 'inherit', textDecoration: 'inherit'}}>
            <Container type={type} >
                <VideoImage src={videoCardImage} type={type}/>
                <VideoDetails type={type}>
                    <AccountImage src={ChannelImage} type={type}/>
                    <VideoText>
                        <VideoName style={({theme})=> theme.Alltext} type={type}>Youtube Clone MERN Stack</VideoName>
                        <AccountName>K'eyush The Stunt Dog</AccountName>
                        <VideoInfo>302,042 views • 10 days ago</VideoInfo>
                    </VideoText>
                </VideoDetails>
            </Container>
        </Link>
    )
}