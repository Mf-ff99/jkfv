class Tabs extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            tabIndex: 1,
            tabContent: [
                { header: 'Tab #1', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', index: 1 },
                { header: 'Tab #2', content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatu', index: 2 },
                { header: 'Tab #3', content: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id ', index: 3 }
            ]
        }
    }


    renderTabs() {
        const tabs = this.state.tabContent.map((tab) => {
            if (this.state.tabIndex === tab.index) {
                return (
                    <div className='tab' key={tab.index}>
                        <div className='tab-content'>
                            <p>{tab.content}</p>
                        </div>
                    </div>
                )
            }
        }
        )
        return tabs
    }

    handleEnterKeyPress = (e, tabIndex) => {
        let { which } = e
        if (which === 13) {
            this.handleTabClick(tabIndex)
        }
    };

    handleTabClick(tabIndex) {
        this.setState({ tabIndex: tabIndex })
    };

    renderTabHeaders() {
        let tabHeaders = this.state.tabContent.map((tab) => {

            if (this.state.tabIndex === tab.index) {
                return (
                    <div className='tab-header tab-selected' key={tab.index}>
                        <div>
                            <h2 tabIndex={0} onKeyPress={e => this.handleEnterKeyPress(e, tab.index)} onClick={() => this.handleTabClick(tab.index)}>{tab.header}</h2>
                        </div>
                    </div>
                )
            } else {
                return (
                    <div className='tab-header' key={tab.index}>
                        <div>
                            <h2 onKeyPress={e => this.handleEnterKeyPress(e, tab.index)} tabIndex={0} onClick={() => this.handleTabClick(tab.index)}>{tab.header}</h2>
                        </div>
                    </div>
                )
            }
        }
        )
        return tabHeaders
    };

    render() {
        const tabs = this.renderTabs()
        const tabHeaders = this.renderTabHeaders()
        return (
            <section>
                <div className='headers'>
                    {tabHeaders}
                </div>
                <div className='tabs'>
                    {tabs}

                </div>
            </section>
        )
    }
}

ReactDOM.render(<Tabs />, document.querySelector("#app"))
