
function Category({img, title}){
    return(
<div className="flex flex-col items-center text-center">
    <div className="rounded-full bg-[#f1f1f0] w-37.5 h-37.5 p-6">
        <img

        src={img}
        alt={title}
        />
    </div>
    <p>{title}</p>
</div>
    )
}
export default Category