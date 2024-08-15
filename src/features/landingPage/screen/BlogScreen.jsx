import BlogPostView from "../component/BlogPostView";
import NavBarComponent from "../component/NavbarComponent";
import NavDrawerBar from "../component/NavDrawerBar";
import FooterScreen from "./FooterScreen";


const BlogScreen = () => {
    return (
      <div className="w-full overflow-x-hidden">
       
        <NavBarComponent image={"bg-blogBackgroundImage"} text={"More Than Just Houses, We Create Homes"} textSize={"text-4xl"} lineHeight={'leading-[60px]' } buttonOneText={"LogIn"} makeVisible={"block"} adjustHeight={"h-fit"}/>
      <BlogPostView/>
      <FooterScreen/>
      <NavDrawerBar/>
      </div>
    );
}


export default BlogScreen