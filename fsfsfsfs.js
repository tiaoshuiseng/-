class ErrorBoundary extends Component<
  PropsWithChildren<unknown>,
  ErrorBoundaryState
> {
  constructor(props: PropsWithChildren<unknown>) {
    super(props);
    this.state = { hasError: false, unlisten: () => { } };
    this.handleBack = this.handleBack.bind(this);
    this.handleRefresh = this.handleRefresh.bind(this);
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidMount() {
    const unlisten = UmiHistory.listen(() => {
      this.setState({ hasError: false });
    });
    this.setState({ unlisten });
  }

  componentWillUnmount() {
    this.state.unlisten();
  }

  handleBack() {
    history.goBack();
    this.setState({ hasError: false });
  }

  handleRefresh() {
    UmiHistory.go(0);
    this.setState({ hasError: false });
  }

  render() {
    if (this.state.hasError) {
      return (
        <Card className="block shadow">
          <Result
            status="error"
            title="发生了一些错误"
            extra={[
              <Button type="primary" onClick={this.handleBack} key="back">
                返回
              </Button>,
              <Button type="primary" key="refresh" onClick={this.handleRefresh}>
                刷新
              </Button>,
            ]}
          ></Result>
        </Card>
      );
    }
    return this.props.children;
  }
}