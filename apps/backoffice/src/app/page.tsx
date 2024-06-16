'use client'
import React, { useEffect } from 'react';
import Landing from './landing/landing';
import { useSession } from 'next-auth/react';
import { axios } from '@/lib/api';

export default function Home() {
  useEffect(() => {
    const getFetch = async () => {
      // await axios.post('/v1/drive/create', { name: 'prueba', info: 'holca como estas? ' }).then(response => response.data).then(data => console.log(data))
      // await axios.post('/v1/drive/read', { fileId: '1ev6Lxd6GRM_msF4G9brGJxDgqxQZYj8v' }).then(response => response.data).then(data => console.log(data))
      // await axios.post('/v1/drive/update', { fileId: '1lX6NN8oqWW4lUlicAJBEwqwyxUymRmQG', newContent: 'tengo mucho shueno hoy y quiero dormir' }).then(response => response.data).then(data => console.log(data))
      // await axios.post('/v1/drive/delete', { fileId: '1lX6NN8oqWW4lUlicAJBEwqwyxUymRmQG' })

    }
    getFetch()
  }, [])
  return <Landing />
}