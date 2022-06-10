import { useEffect, useState } from "react";
import { HomeLayout, ProfileContent, ProfileLayout } from "./ui-components";

function App() {
  const [profileName, setProfileName] = useState("");
  const [linkedInUrl, setLinkedInUrl] = useState("");

  useEffect(() => {
    fetch(
      "https://faas-nyc1-2ef2e6cc.doserverless.co/api/v1/web/fn-268b84f6-e7dc-4e43-ad1a-ea3985f7698b/portfoliocms/profile"
    )
      .then((response) => response.json())
      .then((data) => {
        const { profileName, linkedInUrl } = data;
        setProfileName(profileName);
        setLinkedInUrl(linkedInUrl);
      });
  }, []);
  return (
    // <HomeLayout />
    <ProfileLayout profile={{ profileName, linkedInProfile: linkedInUrl }} />
  );
}

export default App;
