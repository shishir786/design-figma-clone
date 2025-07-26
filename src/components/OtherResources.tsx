import Image from 'next/image';

interface ArticleCardProps {
  image: string;
  date: string;
  title: string;
  description: string;
}

const ArticleCard = ({ image, date, title, description }: ArticleCardProps) => {
  return (
    <div className="flex flex-col w-full max-w-[350px] bg-white rounded-[16px] overflow-hidden shadow-lg">
      {/* Article Image */}
      <div className="w-full h-[220px] overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={350}
          height={220}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Article Content */}
      <div className="flex flex-col items-start gap-3 p-6 h-[280px]">
        <div className="text-[#175730] text-sm font-medium">
          {date}
        </div>

        <h3 className="text-[#175730] text-xl font-bold leading-tight">
          {title}
        </h3>

        <p className="text-[#666] text-sm leading-relaxed flex-1 pb-4">
          {description}
        </p>
      </div>
    </div>
  );
};

interface OtherResourcesProps {
  articles?: ArticleCardProps[];
}

export default function OtherResources({ articles }: OtherResourcesProps) {
  const defaultArticles: ArticleCardProps[] = [
    {
      image: "/rs1.png",
      date: "March 15, 2024",
      title: "Top 10 Real Estate Investment Tips for Beginners",
      description: "Discover essential strategies and insights to help you make smart real estate investment decisions and build long-term wealth."
    },
    {
      image: "/rs2.png",
      date: "March 10, 2024",
      title: "Understanding Fix and Flip Financing Options",
      description: "Learn about different financing methods available for fix and flip projects and how to choose the right option for your investment."
    },
    {
      image: "/rs3.png",
      date: "March 5, 2024",
      title: "Investor's Guide To Real Estate Wholetailing",
      description: "Real estate wholetailing investment technique that combines the best aspects of two of the most common strategies - flipping houses and wholesaling. With wholetailing, you can earn large."
    }
  ];

  const articlesToShow = articles || defaultArticles;

  return (
    <section id="resources" className="flex py-24 px-6 lg:py-24 lg:px-[154px] flex-col justify-center items-center gap-16 bg-white">
      {/* Header Section */}
      <div className="flex w-full max-w-[1420px] justify-between items-center">
        <h2 className="text-[#175730] font-inter text-4xl lg:text-[56px] font-extrabold leading-normal tracking-[2.24px] uppercase">
          Other Resources<br />You&apos;ll Like
        </h2>

        <button className="bg-[#175730] text-white px-6 py-3 rounded-[8px] font-inter font-bold text-[14px] hover:opacity-90 transition-opacity">
          VIEW MORE
        </button>
      </div>

      {/* Articles Grid */}
      <div className="flex flex-wrap justify-center gap-8 lg:gap-12 w-full max-w-[1420px]">
        {articlesToShow.map((article, index) => (
          <ArticleCard
            key={index}
            image={article.image}
            date={article.date}
            title={article.title}
            description={article.description}
          />
        ))}
      </div>
    </section>
  );
}
