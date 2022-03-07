import MyComponent from '../../../../slices/ImageWithCaption';

export default {
  title: 'slices/ImageWithCaption'
}


export const _DefaultSlice = () => <MyComponent slice={{"variation":"default-slice","name":"Default slice","slice_type":"image_with_caption","items":[],"primary":{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1587613865763-4b8b0d19e8ab?w=900&h=500&fit=crop"},"caption":[{"type":"paragraph","text":"Amet veniam pariatur minim mollit incididunt. Aliqua nisi veniam velit mollit reprehenderit cupidatat qui aliqua do laboris laboris ipsum.","spans":[]}]},"id":"_DefaultSlice"}} />
_DefaultSlice.storyName = 'Default slice'

export const _FullWidthImage = () => <MyComponent slice={{"variation":"fullWidthImage","name":"Full Width Image","slice_type":"image_with_caption","items":[],"primary":{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1491975474562-1f4e30bc9468?w=900&h=500&fit=crop"},"caption":[{"type":"paragraph","text":"Lorem consectetur veniam veniam nostrud proident dolore ipsum voluptate nisi nisi sit ipsum laborum labore reprehenderit.","spans":[]}]},"id":"_FullWidthImage"}} />
_FullWidthImage.storyName = 'Full Width Image'
