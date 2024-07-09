import { BlogBullets } from "@/components/blogComponents/BlogBullets"
import { BlogHeader } from "@/components/blogComponents/BlogHeader"
import { BlogImage } from "@/components/blogComponents/BlogImage"
import { BlogParagraph } from "@/components/blogComponents/BlogParagraph"

export const blog1 = {
  title: "Blog One",
  author: "Taha Shah",
  date: "2022-01-01",
  headerSrc: "/News&Updates/News/3.jpg",
  content: [
    <BlogHeader text={"This is HUGE a header"} size="HUGE" />,
    <BlogHeader text={"This is LARGE a header"} size="LARGE" />,
    <BlogHeader text={"This is BASE a header"} size="BASE" />,
    <BlogHeader text={"This is SMALL a header"} size="SMALL" />,
    <BlogParagraph size="LARGE" text={"LARGE Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis sapiente excepturi dolores molestiae, quia quam quis in dicta, omnis ratione necessitatibus voluptatibus. Accusantium veniam laborum odit optio, sed, delectus saepe perferendis expedita itaque, labore voluptates doloremque molestiae laudantium quia inventore neque et deleniti veritatis praesentium rerum quis quod distinctio? Perspiciatis iure animi sapiente placeat culpa nobis totam quis at deleniti, nam blanditiis quaerat laboriosam eum cupiditate voluptatibus, corporis similique esse consequatur! Ex pariatur incidunt doloremque, molestias error iste distinctio suscipit eligendi corrupti eius rem eaque quisquam nisi voluptas culpa at neque accusantium nobis a similique dolorem? Eos alias possimus facilis?"} />,
    <BlogBullets header={"This is an Optional Bullet Header"} 
    points={["This is a Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quos corporis dicta doloribus error perspiciatis, laborum sequi quo omnis officiis?", "This is another Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quos corporis dicta doloribus error perspiciatis, laborum sequi quo omnis officiis?", "This is yet another Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quos corporis dicta doloribus error perspiciatis, laborum sequi quo omnis officiis?"]} 
    style="NUMBER"/>,
    <BlogParagraph size="BASE" text={"BASE Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis sapiente excepturi dolores molestiae, quia quam quis in dicta, omnis ratione necessitatibus voluptatibus. Accusantium veniam laborum odit optio, sed, delectus saepe perferendis expedita itaque, labore voluptates doloremque molestiae laudantium quia inventore neque et deleniti veritatis praesentium rerum quis quod distinctio? Perspiciatis iure animi sapiente placeat culpa nobis totam quis at deleniti, nam blanditiis quaerat laboriosam eum cupiditate voluptatibus, corporis similique esse consequatur! Ex pariatur incidunt doloremque, molestias error iste distinctio suscipit eligendi corrupti eius rem eaque quisquam nisi voluptas culpa at neque accusantium nobis a similique dolorem? Eos alias possimus facilis?"} />,
    <BlogBullets header={"This is an Optional Bullet Header"} 
    points={["This is a Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quos corporis dicta doloribus error perspiciatis, laborum sequi quo omnis officiis?", "This is another Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quos corporis dicta doloribus error perspiciatis, laborum sequi quo omnis officiis?", "This is yet another Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quos corporis dicta doloribus error perspiciatis, laborum sequi quo omnis officiis?"]} 
    style="DOTS"/>,
    <BlogParagraph size="SMALL" text={"SMALL Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis sapiente excepturi dolores molestiae, quia quam quis in dicta, omnis ratione necessitatibus voluptatibus. Accusantium veniam laborum odit optio, sed, delectus saepe perferendis expedita itaque, labore voluptates doloremque molestiae laudantium quia inventore neque et deleniti veritatis praesentium rerum quis quod distinctio? Perspiciatis iure animi sapiente placeat culpa nobis totam quis at deleniti, nam blanditiis quaerat laboriosam eum cupiditate voluptatibus, corporis similique esse consequatur! Ex pariatur incidunt doloremque, molestias error iste distinctio suscipit eligendi corrupti eius rem eaque quisquam nisi voluptas culpa at neque accusantium nobis a similique dolorem? Eos alias possimus facilis?"} />,
    <BlogBullets header={"This is an Optional Bullet Header"} 
    points={["This is a Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quos corporis dicta doloribus error perspiciatis, laborum sequi quo omnis officiis?", "This is another Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quos corporis dicta doloribus error perspiciatis, laborum sequi quo omnis officiis?", "This is yet another Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quos corporis dicta doloribus error perspiciatis, laborum sequi quo omnis officiis?"]} 
    style="CIRCLE"/>,
    <BlogImage src="/News&Updates/News/3.jpg" caption="This is an optional caption" />,
    <BlogBullets header={"This is an Optional Bullet Header"} 
    points={["This is a Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quos corporis dicta doloribus error perspiciatis, laborum sequi quo omnis officiis?", "This is another Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quos corporis dicta doloribus error perspiciatis, laborum sequi quo omnis officiis?", "This is yet another Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quos corporis dicta doloribus error perspiciatis, laborum sequi quo omnis officiis?"]} 
    style="LETTER"/>,
  ]
}