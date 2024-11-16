import React from 'react'
import OtherProfilesPage from '../components/OtherProfilesPage'
import { notFound } from 'next/navigation'
import LoginUser from '../models/Login'

const OtherProfile = async ({ params }) => {
    const username = (await params).username

    const users = await LoginUser.find()
    const user = users.find((name) => { return name.username === username })

    if (!user) {
        return notFound()
    } else {
        return (
            <OtherProfilesPage username={username} />
        )
    }
}

export default OtherProfile