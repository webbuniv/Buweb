"use client"

import SectionTitle from "@/components/Common/SectionTitle"
import PublicationFeed from "./publication-feed"

const PublicationSection = () => {
  return (
    <div id="publications">
      <div className="container">
        <SectionTitle
          title="Academic Publications"
          paragraph="Explore our latest research and academic publications from Bugema University scholars."
          center
        />

        <div className="">
          <PublicationFeed />
        </div>
      </div>
    </div>
  )
}

export default PublicationSection

