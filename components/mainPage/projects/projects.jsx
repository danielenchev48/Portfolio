import Link from "next/link";

export default function Projects() {
    return <>
        <div className="projectsWrapper">
            <div className="headerTitle">Header</div>
            <div className="projects">
                <div className="pContainer">
                    <div className="thumbnail col-6"></div>
                    <div className="info col-6">
                        <div className="logo">Logo</div>
                        <div className="categories">
                            <div className="category">Category</div>
                            <div className="category">Category</div>
                        </div>
                        <div className="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam illo sapiente voluptatum, ea vel quis optio aspernatur consequuntur porro repellat. Assumenda, illo alias! Architecto a at tempora deleniti, incidunt ad.</div>
                        <Link href={'/'} className="link">Link</Link>
                    </div>
                </div>
                <div className="pContainer">
                    <div className="info col-6">
                        <div className="logo">Logo</div>
                        <div className="categories">
                            <div className="category">Category</div>
                            <div className="category">Category</div>
                        </div>
                        <div className="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam illo sapiente voluptatum, ea vel quis optio aspernatur consequuntur porro repellat. Assumenda, illo alias! Architecto a at tempora deleniti, incidunt ad.</div>
                        <Link href={'/'} className="link">Link</Link>
                    </div>
                    <div className="thumbnail col-6"></div>
                </div>
                <div className="pContainer">
                    <div className="thumbnail col-6"></div>
                    <div className="info col-6">
                        <div className="logo">Logo</div>
                        <div className="categories">
                            <div className="category">Category</div>
                            <div className="category">Category</div>
                        </div>
                        <div className="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam illo sapiente voluptatum, ea vel quis optio aspernatur consequuntur porro repellat. Assumenda, illo alias! Architecto a at tempora deleniti, incidunt ad.</div>
                        <Link href={'/'} className="link">Link</Link>
                    </div>
                </div>
            </div>

        </div>
    </>
}