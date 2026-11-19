import heroBg from "../assets/images/about-bg.jpg";
const starIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="size-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
    />
  </svg>
);
const eyeIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="size-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
    />
  </svg>
);
const missionICon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="size-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
    />
  </svg>
);
function AboutUs() {
  return (
    <div className="w-full">
      
      <div className="relative w-full h-64 md:h-80 flex items-center justify-center overflow-hidden">
    
        <img
          src={heroBg}
          alt="About Us Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-teal-900/20"></div>

        <h1 className="relative z-10 text-4xl md:text-5xl font-bold text-gray-900 tracking-tight bg-gray-300 backdrop-blur-sm px-12 py-6 rounded-lg shadow-md text-center max-w-sm border border-grey-100">
          About Us
        </h1>
      </div>

      
      <div className="max-w-4xl mx-auto px-6 py-12 text-center">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Who We Are</h2>
        <div className="space-y-4 text-xs md:text-sm text-gray-600 leading-relaxed">
          <p>
            Clozzet, Kenya's no. 1 online retailer was established in May 2013
            with the aim and vision to become the one-stop shop for retail in
            Kenya with implementation of best practices both online and offline.
            Clozzet is the largest online retail store in Kenya. At inception we
            did an average delivery time of a week, today we do, on average,
            delivery in 1-5 days.
          </p>
          <p>
            Initially starting with 3 employees, Clozzet presently has a staff
            strength of 1000 young and entrepreneurial Kenyans including our 150
            man strong customer service team available 7 days a week. We do
            country-wide delivery. Clozzet set-up the 1st e-commerce academy in
            Kenya, the Clozzet Academy, building young entrepreneurs pioneering
            various aspects of businesses.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
      
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full border-2 border-[#45C9A1] flex items-center justify-center mb-4 text-[#45C9A1]">
              {missionICon}
            </div>
            <h3 className="text-base font-bold text-gray-900 mb-2">Mission</h3>
            <p className="text-xs text-gray-600 leading-relaxed max-w-xs">
              To innovate, to lead, to enhance, to provide best-value products
              and services to global customers and enhance the quality of life
              for our customers and employees.
            </p>
          </div>

  
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full border-2 border-[#45C9A1] flex items-center justify-center mb-4 text-[#45C9A1]">
              {eyeIcon}
            </div>
            <h3 className="text-base font-bold text-gray-900 mb-2">Vision</h3>
            <p className="text-xs text-gray-600 leading-relaxed max-w-xs">
              To be a global leader in fashion-knit & fashion outerwear by
              empowering innovation and design to provide total customer
              satisfaction.
            </p>
          </div>

    
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full border-2 border-[#45C9A1] flex items-center justify-center mb-4 text-[#45C9A1]">
              {starIcon}
            </div>
            <h3 className="text-base font-bold text-gray-900 mb-2">
              Core Values
            </h3>
            <ul className="text-xs text-gray-600 space-y-1 text-left list-disc list-inside">
              <li>Passion</li>
              <li>Performance</li>
              <li>Simplicity</li>
              <li>Togetherness</li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto px-6 py-12 text-center border-t border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Our History</h2>

          <div className="space-y-4 text-xs md:text-sm text-gray-600 leading-relaxed text-center max-w-3xl mx-auto">
            <p>
              In the year 2013, Clozzet became a part of the apparel
              manufacturing industry. In terms of over a decade, our company has
              developed rapidly and at the current moment employs more than 1000
              employees at our factory sites. CLOZZET is an integrated apparel
              manufacturer with the comprehensive capability to design and
              manufacture readymade garments with high quality for the Global
              Market, with a very competitive price.
            </p>

            <p>
              Our company can produce various kinds of garment, in various
              styles, across three categories which includes - flat-knit
              sweaters, outerwear jackets and circular knit t-shirts,
              sweatshirts & joggers, among which are, apparels for Men, Women,
              Kids and Babywear with a total capacity that reaches 12,00,000,
              2,50,000 & 10,00,000 pieces respectively, per annum. In producing
              high quality products, our company is supported by sophisticated
              technology and framework, which is helped by manpower and a
              capable and appressed team of experts who have helped us gain a
              local dominance over our field of expertise.
            </p>

            <p>
              With the abutment of complete CLOZZET family, we have been able to
              generate a total revenue of 1.2 BILLION in the year 2016-17. We
              slowly built our reputation & started getting more business.
              Various international brands vested their design and outsourcing
              requirements and have received satisfactory creative and
              economically viable results.
            </p>

            <p>
              Starting with such a small production order, Clozzet Clothing Co.
              Limited. has grown rapidly and has been catering to the global
              leading apparel brands and growing its network all across the
              world.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
