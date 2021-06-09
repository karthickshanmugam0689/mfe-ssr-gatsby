import * as React from 'react'
import Layout from '../components/layout'
import TextInput from '../components/text';

const MFE2TextOutput = React.lazy(
  () => import('MFE2/TextOutput')
);

const MFE1TextInput = React.lazy(
  () => import('MFE1/TextInput')
);


const MFE2TextOutputWithDelay = React.lazy(() => {
  return Promise.all([
    import('MFE2/TextOutput'),
    new Promise(resolve => setTimeout(resolve, 5000))
  ])
  .then(([moduleExports]) => moduleExports);
});

const IndexPage = () => {
  const isSSR = typeof window === "undefined"
  const [showCSR, setShowCSR] = React.useState(false);
  React.useEffect(
    () => {
      if(!isSSR) {
        setTimeout(() => {
          setShowCSR(true)
        }, 2000);
      }
    },
    [isSSR]
  );
  const [text, setText] = React.useState('');

  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      {!showCSR ? 
        (
          <TextInput changeAction={textInput => setText(textInput)} isSSR={isSSR}/>
        ) : 
        (
          <React.Suspense fallback={null}>
            <MFE1TextInput changeAction={textInput => setText(textInput)} value={text}/>
          </React.Suspense>
        )
      }
      {!isSSR && (
        <>
          <br></br>
          <React.Suspense fallback='Loading TextOutput'>
            <MFE2TextOutput text={text} />
          </React.Suspense>
          <br></br>
          <React.Suspense fallback='Loading TextOutput with delay'>
            <MFE2TextOutputWithDelay text={text} />
          </React.Suspense>
        </>
      )}
    </Layout>
  )
}

export default IndexPage