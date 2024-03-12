### PARALLAX SCROLLING

#### 1. **What is parallax scrolling?**
- It is a web site trend where the `background content` (i.e. an image) is moved at a `different speed` than the `foreground content` while scrolling.

(Cho thêm vài website ví dụ)

#### 2. How To Create a Simple Parallax Scrolling Effect
- Add a background image to the container with a specific height
- Use the `background-attachment: fixed` to create the actual parallax effect.

*Example code:*
```html
<style>
.parallax {
  /* The image used */
  background-image: url("img_parallax.jpg");

  /* Set a specific height */
  min-height: 500px;

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>

<!-- Container element -->
<div class="parallax"></div>
```

- Some mobile devices have a problem with `background-attachment: fixed`
→ turn off the parallax effect for mobile devices
```css
@media only screen and (max-device-width: 1366px) {
  .parallax {
    background-attachment: scroll;
  }
}
```
**Example:**
Ví dụ ta có 4 section như sau:
```html
<div id="section1" class="section">
    <div class="text">
        <h2>Lorem Ipsum 1</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin iaculis orci turpis. Pellentesque laoreet
            velit quis dapibus sollicitudin. Vivamus tortor orci, ultricies finibus leo a, venenatis ullamcorper
            libero. Vestibulum et viverra magna. Ut pulvinar est elementum, sagittis felis in, volutpat arcu.
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut
            pellentesque maximus diam quis fermentum. Proin semper aliquet commodo. Sed leo ante, ultricies eget
            molestie in, ullamcorper et justo.</p>
    </div>
</div>

<div id="section2" class="section">
    <div class="text">
        <h2>Lorem Ipsum 2</h2>
        <p>Vivamus massa nisi, maximus sit amet tellus pulvinar, laoreet interdum ligula. Nulla placerat eros sed
            fringilla porttitor. Curabitur bibendum mi lacus. Ut fringilla tincidunt mauris ut laoreet. Proin eu
            eros quis neque luctus pretium. Mauris quis nisl viverra, eleifend elit vel, rhoncus lorem. Quisque
            pulvinar mollis lacus et rhoncus. Vestibulum in venenatis lacus, sed tempus ante. Phasellus commodo
            egestas consequat. Sed ut lectus nisl. In et volutpat justo, ut auctor dolor. Vestibulum bibendum mollis
            pharetra.</p>
    </div>
</div>

<div id="section3" class="section">
    <div class="text">
        <h2>Lorem Ipsum 3</h2>
        <p>Quisque in lacus non erat vulputate ullamcorper. Sed rhoncus sodales sem, sed imperdiet mi efficitur ac.
            Praesent efficitur sit amet lorem sit amet blandit. Nam accumsan commodo sodales. Fusce metus neque,
            dapibus et leo et, iaculis consectetur augue. Curabitur ut mauris nec eros iaculis mollis. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Sed id iaculis leo. Aenean fringilla sapien velit, eget
            condimentum massa bibendum id.</p>
    </div>
</div>

<div id="section4" class="section footer">
    <h2>Lorem Ipsum ?</h2>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
        industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
        Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
        Aldus PageMaker including versions of Lorem Ipsum.</p>
</div>
```

Mong muốn rằng `section1` và `section3` sẽ di chuyển chậm hơn khi scrolling so với `secion2` và `section4`.

**Giải pháp:**
Sử dụng `perspective: 1px;` cho thẻ `body` và tại `section1` và `section3` ta `transform: translateZ(-1px)`.

- **Perspective**: (https://css-tricks.com/how-css-perspective-works/)
  - Determines the distance between the z=0 plane and the user in order.
  - Use to give a 3D-positioned element some perspective.
  - Each 3D element with z>0 becomes larger; each 3D-element with z<0 becomes smaller.
→ thuộc tính `perspective` sẽ cho ta thấy được chiều sâu của thành phần, khoảng chiều sâu được tính từ điểm đặt ban đầu tới giá trị của perspective (theo đơn vị pixel). 

- **Translate Z**
  - Repositions an element along the z-axis in 3D space, i.e., **closer** to or **farther** away from the viewer.
→ Tóm lại, perspective dùng để enable 3D-positioned cho element. Và dùng `translateZ` để kéo element lại gần hơn hoặc đẩy ra xa hơn so với vị trí ban đầu.
→ Càng ra xa thì element sẽ nhỏ hơn và di chuyển sẽ chậm hơn theo góc nhìn của user ở một vị trí cố định.

- Khi `translateZ(-1px)` thì kích thước sẽ giảm đi một nửa. Do đó, để duy trì kích thước ban đầu, nhằm tạo cho user cảm giác element vẫn không có gì thay đổi ta dùng thêm thuộc tính `transform: scale(2)`.

**CSS:**
```css
#section1 {
  background-image: url("http://recruit.framgia.vn/wp-content/themes/framgia-vn/css/images/bg/bg_vision.jpg");
  transform: translateZ(-1px) scale(2);
  z-index: -1;
  background-attachment: fixed;
}

#section2 {
  background-image: url("http://recruit.framgia.vn/wp-content/themes/framgia-vn/css/images/bg/bg_out-activity.png");
  background-attachment: fixed;
}

#section3 {
  background-image: url("http://recruit.framgia.vn/wp-content/themes/framgia-vn/css/images/bg/bg_what-we-do.png");
  transform: translateZ(-1px) scale(2);
  z-index: -1;
}

#section4 {   
  background-image: url("http://recruit.framgia.vn/wp-content/themes/framgia-vn/css/images/bg/footer.png");
}
```

#### 3. Use Js library to create parallax Effect by Scrolling
- Có nhiều thư viện hỗ trợ như: `Skrollr`, `scrollMagic`, `Parallax.js`, `scrollReveal.js`,... 
- Trong ví dụ này, mình sẽ sử dụng thư viện `Skrollr` để tạo parallax effect mà nó đơn giản, tương thích với nhiều thiết bị.

Setup:
```html
<script src="assets/skrollr.min.js"></script>

<script>
    skrollr.init();
</script>
```

**Introduction to Scrollr:**
- Add data attributes to the elements to animate while the page is scrolled.
Example:
```html
<div data-bottom-top="background-color: rgb(255,0,0);" 
data-center-center="background-color: rgb(0,0,255);">
</div>
```
- First attribute will tell Scrollr when the animation starts and the second one when it should end.

**Ví dụ:**
Ta có 3 đoạn text inline như sau:
![body-text](/images/parallax/1.png)

Mong muốn khi scroll đến element trên thì sẽ có một animation scale lớn dần, đồng thời opacity cũng rõ dần.

Ta apply như sau:
```html
 <div class="body-text">
    <h2>Body Text</h2>

    <p data-300-center-top="transform: scale(0.8); opacity: 0" data-300-center-center="transform: scale(1); opacity: 1">
        Lorem ipsum dolor ...
    </p>


    <p data-200-center-top="transform: scale(0.8); opacity: 0" data-200-center-center="transform: scale(1); opacity: 1">
        Lorem ipsum dolor ...
    </p>

    <p data-100-center-top="transform: scale(0.8); opacity: 0" data-100-center-center="transform: scale(1); opacity: 1">
        Lorem ipsum dolor ...
    </p>
</div>
```

**Giải thích:**
- Tất cả các đoạn paragraph đang thực hiện animation từ `center-top` đến `center-center`, tức là khoảng khi ta scroll mép trên element vừa chạm đến `center viewport` đến lúc trọng tâm element nằm ở `center viewport`.
- Để rõ hơn vị trí của element, ta xem ảnh mô tả sau đây:
![position-el](/images/parallax/2.png)
- 300, 200, 100 trong `data-300`, `data-200` hay `data-100` chính là offset (default = 0) position của element. 
- Chẳng hạn `data-300-center-top`: nghĩa là cách vị trí `center-top` 300px thì amination bắt đầu hoạt động.

Ta được kết quả như sau:
![parallax-result](/images/parallax/3.gif)

#### 4. Parallax Effect with ReactJs
**4.1. React-scroll-parallax**
- Github: github.com/jscottsmith/react-scroll-parallax
- Storybook: https://react-scroll-parallax-v3.surge.sh/
- Website: https://react-scroll-parallax.damnthat.tv/docs/usage/
- Unpacked Size: 202kB

**Usage:**

Wrap with a `ParallaxProvider`:
```jsx
import { ParallaxProvider } from 'react-scroll-parallax';

function App() {
  render() {
    return (
      <ParallaxProvider>
        <AppRoutes />
      </ParallaxProvider>
    );
  }
}
```
After wrapping the app with a provider you can start adding parallax effects.

With `useParallax()`:
```jsx
import { useParallax } from 'react-scroll-parallax';

const { ref } = useParallax<HTMLDivElement>({ speed: -10 });
const {ref: ref1} = useParallax<HTMLDivElement>({speed: 10})

return (<div>
    <div className='parallax-empty'/>
    <div className='parallax-empty'/>
    <div ref={ref} className="parallax-1">Low speed</div>
    <div className='parallax-empty'/>
    <div ref={ref1} className="parallax-1">Faster speed</div>
    <div className='parallax-empty'/>
    <div className='parallax-empty'/>
    <div className='parallax-empty'/>
 </div>)
```
**Demo:**
![parallax-3](/images/parallax/4.gif)

Kết hợp khi scroll vừa xoay element, vừa di chuyển từ từ sang phải.
```jsx
const {ref: ref1} = useParallax<HTMLDivElement>({rotate: [0,360], translateX: [0, 500]})
```
**Demo:**
![parallax-4](/images/parallax/5.gif)

**Demo with banner**
```jsx
<div style={{ height: '10vh' }} />
<ParallaxBanner
  layers={[
    { image: '/banner.jpeg', speed: -15 },
    {
      children: <h1 className='head-text'>Introduction</h1>,
      speed: 10,
    } ]}
  style={{ aspectRatio: '2/1' }} />
<div style={{ height: '100vh' }} />
```

![Demo](/images/parallax/6.gif)

**4.2 Framer motion**
- Github: github.com/framer/motion
- Website: https://www.framer.com/motion
- Unpacked Size: 2.07MB

**Demo**
**Library:**
- framer-motion
- react-intersection-observer

**Features:**
- Two boxes are moving with different speed when scrolling.
- Animate a box when scroll in view

**Html**
```jsx
<div className='motion'>
  <motion.div className='box' style={{ y: y1, x: -50 }} />
  <motion.div
    className='box'
    style={{ y: y2, x: 50, background: 'salmon' }}
  />
  <div style={{ height: 500 }} />
  <div style={{ position: 'fixed', top: 0, left: 0 }}>
    {'is in view ' + inView}
  </div>
  <motion.div
    animate={inView ? 'visible' : 'hidden'}
    variants={variants}
    transition={{ duration: 2, ease: 'easeOut' }}
    ref={ref}
    className='magic'
  />
</div>
```
- We have three boxes (wrap by `motion.div` tag):
  - The first two boxes will move with different speed.
  ```jsx
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 200]);
  const y2 = useTransform(scrollY, [0, 300], [0, -200]);
  ```
  - The last box will be animated which indicated by the value `variants`.

  ```jsx
  const [ref, inView] = useInView({
	  /* Optional options */
	  threshold: 0.5,
	  triggerOnce: false,
	});

	const variants = {
	  visible: { opacity: 1, scale: 1, y: 0 },
	  hidden: {
	    opacity: 0,
	    scale: 0.65,
	    y: 50,
	  },
	};
  ```

**Example:**
https://codesandbox.io/s/framer-motion-parallax-5tgfu
https://www.jordan.com/collection/air-jordan-27
https://nasaprospect.com/
https://www.recapafteruse.co.uk/
https://webflow.com/web-design-art-history