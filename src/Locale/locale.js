import React from "react"

const enString = {
  submit: "Submit",
  cancel: "Cancel"
};

const cnString = {
  submit: "提交",
  cancel: "取消"
};

const LocaleContext = React.createContext(enString);

class LocaleProvider extends React.Component {
  state = { locale: cnString };
  toggleLocale = () => {
    const locale =
      this.state.locale === enString
      ? cnString
      : enString;
    this.setState({ locale });
  };

  render() {
    return (
      <LocaleContext.Provider value={this.state.locale}>
        <button onClick={this.toggleLocale}>
          切换语言
        </button>
        {this.props.children}
      </LocaleContext.Provider>
    );
  }
}

class LocaledButtons extends React.Component {
  render() {
    return (
      <LocaleContext.Consumer>
        {locale => (
          <div>
            <button>{locale.cancel}</button>
            &nbsp;
            <button>{locale.submit}</button>
          </div>
        )}
      </LocaleContext.Consumer>
    );
  }
}

export default () => (
  <div>
    <LocaleProvider>
      <div>
        <br />
        <LocaledButtons />
      </div>
    </LocaleProvider>
    <LocaledButtons />
  </div>
);
