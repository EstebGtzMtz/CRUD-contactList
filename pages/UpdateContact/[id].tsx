import { useRouter } from 'next/router'

const UpdateContact = () => {
  const router = useRouter()
  const { id } = router.query;

  return (
    <div>UpdateContact: {id}</div>
  )
}

export default UpdateContact