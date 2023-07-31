import React from 'react'
import { Container, Image } from '@nextui-org/react';
import styles from "../styles/BuddyProfile.css";
import { Card, Col, Text } from "@nextui-org/react";
import { useParams } from 'react-router-dom';
import AddActivityModal from '../components/AddActivityModal/AddActivityModal'

const BuddyProfile = ({currentUser, userActivity, activities}) => {

  const { id } = useParams()

  const filteredActivities = userActivity.filter(activity => {
    return +activity.user_id === +currentUser.id
  })

  const activityArray = []
  const myEvents = filteredActivities.map(event => {
    return activityArray.push(event.activity_id)
  })

  const myActivities = activities.map(activity => {
    if(activityArray.includes(activity.id)) {
      return <ul className='activity-list'>{activity.activity_name}</ul>
    }
  })

  return (
    <>  
    <h1 className='your_profile'>
      Your Profile
    </h1>
   
    <Container className='pic_fields'>
      <Image
        className="profile-image"
        width={320}
        height={180}  
        src={currentUser.photo}
        alt="User Image"
        objectFit="cover" 
      />

        <Card className="profile-card" css={{ w: 500, h: "400vh", bg: "Black"}}>
        <Card.Header css={{ position: "absolute", zIndex: 1, top: 5}}>
      <Col>

        <Text size={15} weight="bold" transform="uppercase"color="#FFCD4E" >NAME</Text>

        <Text size={13} h3 color="White" >
        {currentUser.name}</Text>

        <Text size={15} weight="bold" transform="uppercase" color="#FFCD4E" > USER NAME</Text>

        <Text size={13} h3 color="White">
        {currentUser.username}</Text>

        <Text size={15} weight="bold" transform="uppercase" color="#FFCD4E">Gender Identity</Text>

        <Text size={13} h3 color="White"> {currentUser.gender_identity}</Text>        

        <Text size={15} weight="bold" transform="uppercase" color="#FFCD4E">your creator id</Text>

        <Text size={13} h3 color="White"> {currentUser.id}</Text>   

        <Text size={15} weight="bold" transform="uppercase" color="#FFCD4E">My Events</Text>

        <Text size={13} h3 color="White" >{myActivities}</Text>        
  
      </Col>
      </Card.Header>
      </Card> 
       </Container>

      <div className='modal'>
      <AddActivityModal />
      </div>
    </>
  );
}
export default BuddyProfile
