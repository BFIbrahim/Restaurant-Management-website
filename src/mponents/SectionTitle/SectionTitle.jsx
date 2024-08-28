
const SectionTitle = ({heading, sabheading}) => {
    return (
        <div className="text-center w-[300px] mx-auto">
            <p className="text-[#D99904] italic border-b-2 pb-2">{sabheading}</p>
            <h1 className="text-3xl border-b-2 pb-2 mb-2">{heading}</h1>
        </div>
    );
};

export default SectionTitle;