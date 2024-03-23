import React from 'react'
import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';
import { EditorData } from '../data/dummy';
import { Header } from '../components';


const Editor = () => {
  return (
    <div className='m-20 md:m-15 p-5 md:p-10 bg-white rounded-3xl'>
      <Header category='App' title='Editor'/>
      <RichTextEditorComponent>
        <Inject services={[HtmlEditor, Toolbar, Link, Image, QuickToolbar ]}/>
      </RichTextEditorComponent>
    </div>
  )
}

export default Editor