import "../../styles/Loading.css"

const Loading = () => {
    return <div class='loader'>
        <div class='loader_overlay'></div>
        <div class='loader_cogs'>
            <div class='loader_cogs__top '>
                <div class='top_part'></div>
                <div class='top_part'></div>
                <div class='top_part'></div>
                <div class='top_hole'></div>
            </div>
            <div class='loader_cogs__left'>
                <div class='left_part'></div>
                <div class='left_part'></div>
                <div class='left_part'></div>
                <div class='left_hole'></div>
            </div>
            <div class='loader_cogs__bottom'>
                <div class='bottom_part'></div>
                <div class='bottom_part'></div>
                <div class='bottom_part'></div>
                <div class='bottom_hole'></div>
            </div>

        </div>

    </div>
}

export default Loading;