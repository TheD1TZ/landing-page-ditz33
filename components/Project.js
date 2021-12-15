import Image from 'next/image'

// { title, description, imgSrc, linkUrl }

//Code




function project({ title, description, imgSrc, linkUrl, codingLang }) {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white hover:shadow-2xl transition ease-in-out duration-300 hover:-translate-y-1 hover:scale-105 ">
            <Image className="w-full" alt="Image" src={imgSrc} width={400} height={400} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-700 text-base">
                    {description}
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{codingLang}</span>
                <button className="btn btn-blue">
                    <a href={linkUrl} target="_blank" rel="noreferrer">Open Project</a>
                </button>
            </div>
        </div>
    )
}



export default project
