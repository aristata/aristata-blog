import PrivateInformation from "@/components/profiles/01_private"
import Belief from "@/components/profiles/02_values"
import Career from "@/components/profiles/03_career"
import Project from "@/components/profiles/04_project"
import License from "@/components/profiles/05_license"

const ProfilePage = () => {
  return (
    <>
      <div className="p-4">
        <PrivateInformation />
        <hr className="h-0.5 bg-gray-500 m-2" />
        <Belief />
        <hr className="h-0.5 bg-gray-500 m-2" />
        <Career />
        <hr className="h-0.5 bg-gray-500 m-2" />
        <Project />
        <hr className="h-0.5 bg-gray-500 m-2" />
        <License />
      </div>
    </>
  )
}

export default ProfilePage
