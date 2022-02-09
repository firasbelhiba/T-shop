import Image from "next/image";

export default function ServicesSection() {
  return (
    <div className="about_gallery_section">
      <div className="container">
        <div className="about_gallery_container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <article className="single_gallery_section">
                <figure>
                  <div className="gallery_thumb">
                    <Image
                      src="https://www.pngitem.com/pimgs/m/531-5311750_web-application-development-automation-process-hd-png-download.png"
                      width="600"
                      height="400"
                    />
                  </div>
                  <figcaption className="about_gallery_content">
                    <h3>Full Stack (Web application) </h3>
                    <p>
                      I build Restful applications with much flexibility and
                      variety of frameworks . I&apos;ve done multiple complexe
                      projects and I am open to any freelance job .
                    </p>
                  </figcaption>
                </figure>
              </article>
            </div>
            <div className="col-lg-4 col-md-6">
              <article className="single_gallery_section">
                <figure>
                  <div className="gallery_thumb">
                    <Image
                      src="https://media.istockphoto.com/photos/blockchain-technology-on-blue-background-picture-id1153383523?k=20&m=1153383523&s=612x612&w=0&h=fhoRtSUMDQl0xG4fxmhM18eIIOyCFNVWCv1AOsTCDkk="
                      width="600"
                      height="400"
                    />
                  </div>
                  <figcaption className="about_gallery_content">
                    <h3>Blockchain ( Decentralized applications )</h3>
                    <p>
                      I also build DApps . I&apos;m very passionate about web3 ,
                      whis is the new layer of the web and I&apos;m currently
                      working on multiple decentralized applications
                      simultaneously . I&apos;m open to any blockchain freelance
                      as well .
                    </p>
                  </figcaption>
                </figure>
              </article>
            </div>
            <div className="col-lg-4 col-md-6">
              <article className="single_gallery_section col__3">
                <figure>
                  <div className="gallery_thumb">
                    <Image
                      src="https://cdn.dribbble.com/users/92164/screenshots/10680054/media/473889486ee8bb15b218204202344af3.png?compress=1&resize=400x300"
                      width="600"
                      height="400"
                    />
                  </div>
                  <figcaption className="about_gallery_content">
                    <h3>UX/UI Designs</h3>
                    <p>
                      I&apos;m not UX/UI designer but I enjoy building templates
                      and designs for web applications . I also do video montage
                      .
                    </p>
                  </figcaption>
                </figure>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
