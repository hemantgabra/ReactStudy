import AllServices from "../AllServices";

function ServicesCard({data}) {
    // const data = {
    //     albumId: 1,
    //     id: 1,
    //     title: "accusamus beatae ad facilis cum similique qui sunt",
    //     url: "https://picsum.photos/600/400?random=1",
    //     thumbnailUrl: "https://picsum.photos/50/50?random=1"
    // };




    return (
        <div className="flex flex-wrap gap-4">
        {data.map((item)=>(
        <div className="max-w-md rounded overflow-hidden shadow-lg bg-white border border-gray-200 hover:shadow-xl transition-shadow duration-300">
            <img className="w-full" src={data.url} alt={data.title} />
            <div className="px-6 py-4">
                {/* <div className="font-bold text-xl mb-2">Service #{data.id}</div> */}
                <p className="text-gray-700 text-base">
                    
                        <div key={item.id}>
                            <h1>{item.id}</h1>
                            <img src={item.images} alt="" />
                             {item.type === "static" ? (
              <span>📁 Static: {item.name}</span>
            ) : (
              <span>📦 API: {item.title}</span>
            )}
                        </div>
                    
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <img src={data.thumbnailUrl} alt="Thumbnail" className="w-12 h-12 rounded-full border" />
            </div>
        </div>
        ))}
        </div>
    );
}

export default ServicesCard;
