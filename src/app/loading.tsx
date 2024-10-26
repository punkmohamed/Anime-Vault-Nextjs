import Image from "next/image"

const loading = () => {
  return (
    <div className="flex justify-center items-center relative  min-h-screen">
      <Image src="/saitama.gif" width={200} height={200} className="object-cover size-72" alt="loader" />
    </div>
  )
}

export default loading