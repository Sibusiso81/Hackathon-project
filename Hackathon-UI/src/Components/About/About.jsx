import React from "react";

function About() {
  return (
    <section
      className="w-screen h-screen  font-poppins flex flex-col items-center "
      id="#About"
    >
      <div className="grid grid-cols-2 ites-center">
        <div className="col-span-1">
          <h1 className="p-10 pl-12 text-2xl font-bold font-varaiable mx-auto">
            What is GeoSpartan ?
          </h1>
        </div>
        <div className="col-span-1">
          <p className="p-6  text-wrap">
            Our app offers a range of features, including accurate crop yield
            predictions based on real-time data, optimized irrigation
            management, and a discussion forum where farmers can connect with
            peers and experts. By leveraging these tools, farmers can plan more
            effectively, conserve resources, and achieve greater success in
            their agricultural endeavors.
            <br />
            <br />
            Whether you're a seasoned farmer or just starting out, our app is
            designed to support your journey every step of the way. Together, we
            can cultivate success and sustainability in farming. For more
            information or support, feel free to contact us. Your privacy and
            security are our top priorities, and we are dedicated to protecting
            your data as you use our app. Thank you for being a part of our
            growing community!
          </p>
        </div>
      </div>
      {/*       <div className="flex flex-row items-center text-wrap">
        <div>
          <h1 className="p-4 text-2xl font-bold font-varaiable mx-auto">
            What is GeoSpartan ?
          </h1>
        </div>
        <div clasname="flex flex-c">
          <p className="p-6 text-wrap">
            Our app offers a range of features, including accurate crop yield
            predictions based on real-time data, optimized irrigation
            management, and a discussion forum where farmers can connect with
            peers and experts. By leveraging these tools, farmers can plan more
            effectively, conserve resources, and achieve greater success in
            their agricultural endeavors. Whether you're a seasoned farmer or
            just starting out, our app is designed to support your journey every
            step of the way. Together, we can cultivate success and
            sustainability in farming. For more information or support, feel
            free to contact us. Your privacy and security are our top
            priorities, and we are dedicated to protecting your data as you use
            our app. Thank you for being a part of our growing community!
          </p>
        </div>
      </div> */}
      {/* Mission */}

      <div className="grid grid-cols-2 ites-center p-6 mt-10">
        <div className="col-span-1">
          <h1 className="p-10 pl-12 text-2xl font-bold font-varaiable mx-auto">
            Our Mission
          </h1>
        </div>
        <div className="col-span-1">
          <p className="p-6  text-wrap">
            "To empower small-scale farmers with innovative, data-driven tools
            that enhance productivity, optimize resource management, and foster
            a supportive community, ensuring sustainable and successful farming
            for a better future."
          </p>
        </div>
      </div>
      {/* Our Vission */}

      <div className="grid grid-cols-2 ites-center p-6 mt-10">
        <div className="col-span-1">
          <h1 className="p-10 pl-12 text-2xl font-bold font-varaiable mx-auto">
            Our Vission
          </h1>
        </div>
        <div className="col-span-1">
          <p className="p-6  text-wrap">
            Our vision is to build a thriving agricultural community where
            small-scale farmers can share knowledge, support one another, and
            adopt sustainable farming practices for a better future. We are
            committed to providing the resources and insights needed to make
            this vision a reality.
          </p>
        </div>
      </div>
    </section>
    /* Our Vision */
    /* Our Mission */
    /* aBOUT */
  );
}

export default About;
