import BlurFade from "@/components/magicui/blur-fade";
import Image from "next/image";

const works = [
  {
    background: "bg-gray-200",
    imageUrl: "/images/business.webp",
    title: "Bookkeeping",
    text: "At our company, we have highly professional bookkeeping services that enable us to record and categorize all the financial activities. From simple bookkeeping services such as recording accounts and ledgers to generating monthly financial statements, we enable you with a strong financial reporting platform.",
  },
  {
    background: "bg-gray-200",
    imageUrl: "/images/business.webp",
    title: "Procure to Pay (P2P)",
    text: "We manage your procurement more efficiently; from selecting the right vendors to paying the bills. These P2P solutions assist in cutting cost, increasing efficiency and timely payments that enhance the supplier relations.",
  },
  {
    background: "bg-gray-200",
    imageUrl: "/images/business.webp",
    title: "Order to Cash (O2C)",
    text: "Our O2C services include all aspects of the order fulfilment cycle, from order processing through invoicing and collection. We assist you in handling cash flow efficiently whereas at the same time increasing customer satisfaction through speedy and accurate processing of transactions.",
  },
  {
    background: "bg-gray-200",
    imageUrl: "/images/business.webp",
    title: "Bank Reconciliation",
    text: "Bank reconciliation is done on a regular basis so that your books of account can be balanced with the bank statements and any problems can be solved at the earliest. This makes a lot of sense especially in terms of ensuring that the data input is accurate and the financial records are free from any form of compromise.",
  },
  {
    background: "bg-gray-200",
    imageUrl: "/images/business.webp",
    title: "General Ledger Management",
    text: "Our team makes it our responsibility to make sure that your general ledger is well managed and contains all the financial operations. Our reports are detailed to help you make better strategic decisions for your business.",
  },
  {
    background: "bg-gray-200",
    imageUrl: "/images/business.webp",
    title: "Fixed Asset Accounting",
    text: "It helps us to track your fixed assets from the time of purchase, its depreciation and finally its disposal. Our services help in the preparation of the accounts and compliance with the various accounting standards.",
  },
  {
    background: "bg-gray-200",
    imageUrl: "/images/business.webp",
    title: "Management Reporting",
    text: "Our informative management reports and management dashboards give you a clear picture of your business’s financial position and enable you to make sound decisions that would propel the business forward.",
  },
  {
    background: "bg-gray-200",
    imageUrl: "/images/business.webp",
    title: "Financial Analytics",
    text: "With the help of modern tools, we study your financial information and patterns to see the strengths and weaknesses of your company’s performance and to give advice on how to overcome difficulties and make the most of the opportunities you are provided with.",
  },
  {
    background: "bg-gray-200",
    imageUrl: "/images/business.webp",
    title: "Tax Services",
    text: "Our tax consultants provide you with strategic advice, compliance, and advisory services so that you can meet your tax obligations effectively.",
  },
  {
    background: "bg-gray-200",
    imageUrl: "/images/business.webp",
    title: "HR & Payroll Services",
    text: "We offer comprehensive human resource and payroll services that help in efficient processing of payrolls, administration of employee benefits and legal compliance thus increasing the level of satisfaction among employees.",
  },
];

export function BlurFadeDemo() {
  return (
    <section id="photos">
      <div className="grid md:grid-cols-2 gap-8 mt-10 justify-items-center">
        {works.map(({ imageUrl, title, text }, idx) => (
          <BlurFade
            key={title}
            delay={0.25 + idx * 0.05}
            inView
            className={`rounded-lg ${works[idx].background} p-4`}
          >
            <Image
              height={10000}
              width={10000}
              className="
                h-5/6 w-full object-cover rounded-lg"



              src={imageUrl}
              alt={`Random stock image ${idx + 1}`}
            />
            <h3 className="text-lg font-semibold p-4">{title}</h3>
            <p>{text}</p>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
